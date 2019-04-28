import React, { Component } from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Orders from "./containers/Orders/Orders";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/Layout/Layout";
import {AxiosInstance as axios} from "axios";

class Test extends Component{
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts/'+this.props.match.params.id+'.json').then(response=>{
            this.setState({post: response.data});
        });
    }
    render(){
        return <div>Hello,I am a post</div>
    }
}

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
              <Route path={"/"} exact component={BurgerBuilder}/>
              <Route path={"/checkout"} component={Checkout}/>
              <Route path={"/orders"} component={Orders}/>
              <Route path={"/posts/:id"} component={Test}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
