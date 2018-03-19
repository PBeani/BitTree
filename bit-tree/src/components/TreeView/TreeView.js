import React, { Component } from 'react'
import TreeNode from '../TreeNode/TreeNode'

const treeView = (props) => {
    return (
        <TreeNode node={props.node} width={100}/>
    )
}

export default treeView