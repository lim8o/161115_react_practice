/**
 * Created by 王旭飞 on 2017/3/15.
 */
import React, {Component, PropTypes} from 'react'

export default class Add extends Component {

    constructor(props) {
        super(props)
        //绑定this
        this.addComment = this.addComment.bind(this)
    }

    addComment() {
        //收集数据成为对象
        const comment = {
            username: this.refs.username.value,
            content: this.refs.content.value
        }
        //判断输入是否为空
        if(comment.content==''||comment.username==''){
            alert('请评论后再提交！')
        } else {
            //添加到comments
            this.props.add(comment)
            //清除输入
            this.refs.username.value = '',
                this.refs.content.value = ''
        }

    }


    render () {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref='username'/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Add.prototypes = {
    add: PropTypes.func.isRequired
}
