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
          avatarURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1920px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
          fullname: 'Steve Jobs',
          email: 'steve@mac.com',
          phone: 2222222222,
        },
        {
          avatarURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/1280px-Thomas_Edison2.jpg',
          fullname: 'Thomas Edison',
          email: 'lightbulb@test.com',
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
