import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        };
    }
    setProgress = (progress) => {
        this.setState({ progress: progress });
    }
    

    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}
                    />
                    <Routes>
                        <Route path='/sports' element={<News setProgress={this.setProgress}  key="sports" country="in" category="sports" />} />
                        <Route path='/business' element={<News setProgress={this.setProgress}  key="business" country="in" category="business" />} />
                        <Route path='/entertainment' element={<News setProgress={this.setProgress}  key="entertainment" country="in" category="entertainment" />} />
                        <Route path='/general' element={<News setProgress={this.setProgress}  key="general" country="in" category="general" />} />
                        <Route path='/health' element={<News setProgress={this.setProgress}  key="health" country="in" category="health" />} />
                        <Route path='/science' element={<News setProgress={this.setProgress}  key="science" country="in" category="science" />} />
                        <Route path='/technology' element={<News setProgress={this.setProgress}  key="technology" country="in" category="technology" />} />
                        <Route path='/' element={<News setProgress={this.setProgress}  key="home" country="in" category="general" />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}
