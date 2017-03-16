/**
 * Created by 王旭飞 on 2017/3/15.
 */
import React, {Component} from 'react'

import Add from '../add/add'
import List from '../list/list'

export default class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            //初始化状态
            comments: []
        }
    }

   componentWillMount () {
       //模拟请求数据
       const comments = [
           {username: 'limbo', content: 'hall'},
           {username: 'lomo', content: 'harven'}
       ]
       //更新状态
       this.setState({comments})
   }

   add = (comment) => {
       const {comments} = this.state
       comments.unshift(comment)
       //更新状态
       this.setState({comments})
   }

   remove = (index) => {
       const {comments} = this.state
       //删除
       comments.splice(index, 1)
       //更新状态
       this.setState({comments})
   }

    render () {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={this.state.comments} remove={this.remove}/>
                </div>
            </div>
        )
    }
}
