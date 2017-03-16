/**
 * Created by 王旭飞 on 2017/3/15.
 */
import React, {Component, PropTypes} from 'react'

import './list.css'
import Item from '../item/item'

export default class List extends Component {
    render () {

        const {comments, remove} = this.props
        let display = comments.length === 0 ? 'block' : 'none'
        const liList = comments.map((comment, index) => {
            const itemProps = {
                key: index,
                remove,
                index,
                comment
            }
            return <Item {...itemProps}/>
        })

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {liList}
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    comments: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
}
