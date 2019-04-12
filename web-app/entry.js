import React, { Component } from 'react'
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'

class Entry extends Component{
    render(){
        return <Button>按钮</Button>
    }
}

export default connect(state => state)(Entry)