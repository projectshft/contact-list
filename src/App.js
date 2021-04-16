import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
} from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [
        {
          avatarURL: 'reallylongurl.com',
          fullname: 'Aaron',
          email: 'Hello',
          phone: 2222222222,
        },
        {
          avatarURL: 'testURLlforavatar.net',
          fullname: 'Mark',
          email: 'test@test.com',
          phone: 7777777777,
        },
      ],
    };

    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    const { posts } = this.state;
    this.setState({ posts: posts.concat([post]) });
    console.log(posts);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Router>
          <div className="row justify-content-md-center">
            <div className="col-md-8 self-align-center">
              <div>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/contacts" />
                  </Route>
                  <Route exact path="/contacts">
                    <ContactList posts={posts} />
                  </Route>
                  <Route exact path="/new">
                    <ContactForm posts={posts} addPost={this.addPost} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
