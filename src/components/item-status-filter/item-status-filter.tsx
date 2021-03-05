import { Component } from 'react'

import './item-status-filter.css';

interface Item_Add_Form{
  onItemAdded?: any
}

export default class ItemStatusFilter extends Component<Item_Add_Form> {

  render(){
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info">All</button>

        <button type="button"
                className="btn btn-outline-secondary">Active</button>
                
        <button type="button"
                className="btn btn-outline-secondary">Done</button>
        <button 
                className="btn btn-outline-secondary"
                onClick={() => this.props.onItemAdded('Hello world')}
                >Add Item</button>        
      </div>
    );
  }
}