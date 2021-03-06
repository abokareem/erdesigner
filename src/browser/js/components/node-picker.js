import { h, Component } from 'preact'
import { bind } from 'decko'
import {ACTION} from '../redux/actions'

import nodeStore from '../redux/store'

import NODE_TYPE from './../constants/node-type'

import Entity from './../components/svg/node-types/node-entity'
// import Attribute from './../components/svg/node-types/node-attribute'
import AssociativeEntity from './../components/svg/node-types/node-associative-entity'
import Relationship from './../components/svg/node-types/node-relationship'
import WeakEntity from './../components/svg/node-types/node-weak-entity'
import Inheritance from './../components/svg/node-types/node-inheritance'

class NodePicker extends Component {
    @bind
    dragStartedEntity(event) {
        this.dragStarted(event, 'node-drag-tween-entity')
    }

    @bind
    dragStartedWeakEntity(event) {
        this.dragStarted(event, 'node-drag-tween-weak-entity')
    }

    @bind
    dragStartedAssociativeEntity(event) {
        this.dragStarted(event, 'node-drag-tween-associative-entity')
    }

    @bind
    dragStartedAttribute(event) {
        this.dragStarted(event, 'node-drag-tween-attribute')
    }

    @bind
    dragStartedRelationship(event) {
        this.dragStarted(event, 'node-drag-tween-relationship')
    }

    @bind
    dragStartedInheritance(event) {
        this.dragStarted(event, 'node-drag-tween-inheritance')
    }

    dragStarted(event, id) {
        event.dataTransfer.setDragImage(document.getElementById(id), 50, 25)
    }

    addNode(event, type) {
        if (event.dataTransfer.dropEffect === 'none') {
            return
        }

        nodeStore.dispatch({
            type: ACTION.ADD_NODE,
            value: { type: type, x: event.clientX, y: event.clientY }
        })
    }

    @bind
    addNodeEntity(event) {
        this.addNode(event, NODE_TYPE.ENTITY)
    }

    @bind
    addNodeWeakEntity(event) {
        this.addNode(event, NODE_TYPE.WEAK_ENTITY)
    }

    @bind
    addNodeAssociativeEntity(event) {
        this.addNode(event, NODE_TYPE.ASSOCIATIVE_ENTITY)
    }

    @bind
    addNodeAttribute(event) {
        this.addNode(event, NODE_TYPE.ATTRIBUTE)
    }

    @bind
    addNodeRelationship(event) {
        this.addNode(event, NODE_TYPE.RELATIONSHIP)
    }

    @bind
    addNodeInheritance(event) {
        this.addNode(event, NODE_TYPE.INHERITANCE)
    }

    render() {
        return (
            <div class='node-picker'>
                <ul class='node-picker-list'>
                    <li class='node-entity'>
                        <div>Drag Items</div>
                    </li>
                </ul>
                <ul class='node-picker-list'>
                    <li class='node node-entity' draggable='true' onDragStart={this.dragStartedEntity} onDragEnd={this.addNodeEntity}>
                        <Entity />
                    </li>
                    <li class='node node-weak-entity' draggable='true' onDragStart={this.dragStartedWeakEntity} onDragEnd={this.addNodeWeakEntity} >
                        <WeakEntity />
                    </li>
                    <li class='node node-associative-entity' draggable='true' onDragStart={this.dragStartedAssociativeEntity} onDragEnd={this.addNodeAssociativeEntity}>
                        <AssociativeEntity />
                    </li>
                    {/* <li class='node node-attribute' draggable='true' onDragStart={this.dragStartedAttribute} onDragEnd={this.addNodeAttribute}> */}
                    {/* <Attribute /> */}
                    {/* </li> */}
                    <li class='node node-relationship' draggable='true' onDragStart={this.dragStartedRelationship} onDragEnd={this.addNodeRelationship}>
                        <Relationship />
                    </li>
                    <li class='node node-relationship' draggable='true' onDragStart={this.dragStartedInheritance} onDragEnd={this.addNodeInheritance}>
                        <Inheritance />
                    </li>
                </ul>

                {/* show dragging element tween / every node type should have own dragging tween */}
                <div class='node' id='node-drag-tween-entity' style='position:absolute;left: -1000px'><Entity /></div>
                <div class='node' id='node-drag-tween-weak-entity' style='position:absolute;left: -1100px'><WeakEntity /></div>
                <div class='node' id='node-drag-tween-associative-entity' style='position:absolute;left: -1200px'><AssociativeEntity /></div>
                {/* <div class='node' id='node-drag-tween-attribute' style='position:absolute;left: -1300px'><Attribute /></div> */}
                <div class='node' id='node-drag-tween-relationship' style='position:absolute;left: -1400px'><Relationship /></div>
                <div class='node' id='node-drag-tween-inheritance' style='position:absolute;left: -1500px'><Inheritance /></div>
            </div>
        )
    }
}

export default NodePicker
