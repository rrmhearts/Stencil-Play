import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-legend',
  styleUrl: 'my-legend.scss'
})

export class MyLegend {
  // Array of legends
  public lists : Array<any> = [
    {  name: 'John Resig',
       description: 'John Resig is an American software engineer and entrepreneur, best known as the creator and lead developer of the jQuery JavaScript library',
       imageUrl: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80'
    },
    {
      name : 'Christian Nwamba',
      description : 'JavaScript preacher. Building the web with the community. @ngnigeria organizer. #Webpack Ambassador. Advocacy for The Next Billion Users.',
      imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
       name: 'Evan you',
       description : 'Design, code & things in between. Living the dream working on @vuejs. Previously @meteorjs & @google, @parsonsamt alumnus.',
       imageUrl: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80'
    },
    {
       name : 'Otemuyiwa Prosper',
       description : 'Prosper is a full stack software engineer and writer who’s worked on biometric, health, financial and developer tools. He currently works with Auth0 as a Technical Writer.',
       imageUrl: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80'
    },
    {
       name : 'Wes Bos',
       description : 'Wes Bos, a full stack web developer and designer from Hamilton, Canada. He loves to share what he knows through training products and teaching ',
       imageUrl: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1919&q=80'
    }
 ];
  /**
   * @type boolean
   * Only used when re-render should occur on state change! else use internal state without @State()
   */
  @State() toggle: boolean = false

  @Prop(/*this isn't doing anything==>*/{mutable: true}) text: string = 'World'

  toggleComponent() : void {
    this.toggle = !this.toggle;
  }

  render() {
      //this.text = "CHanged!";
    return (
      <div id="wrapper">
        <div id="holder">
          <p>{this.text}</p>
          <button onClick={() => this.toggleComponent()}>Toggle List</button>
        </div>
        <div class={ this.toggle ? 'active' : 'inactive' }>
            {this.lists.map(list =>
                <div class="card">
                <h3>{list.name}</h3>
                <p>{list.description}</p>
                <img src={list.imageUrl} alt="Random Avatar"/>
                </div>
            )}
        </div>
      </div>
    );
  }
} //end class