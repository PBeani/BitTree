import React from 'react'
import TreeNode from './TreeNode'
import NodeWrapper from './NodeWrapper'
import Aux from '../../hoc/Auxiliar'

const treeNode = (props) => {
    const node = props.node

    return(
        <NodeWrapper>
            {node ?
                <Aux>
                    <div>Node: {node.value}</div>
                    <TreeNode node={node.left} />
                    <TreeNode node={node.right} />
                </Aux>
                :
                'Vazio'
            }
        </NodeWrapper>
    )
}

export default treeNode