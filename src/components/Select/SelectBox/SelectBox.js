import React from 'react'
import './SelectBox.scss'

export class SelectBox extends React.Component {
  
  state = {
    ...this.props,
    items: this.props.items || [],
    selectedItem: {value: "Не выбран", id: 0} || this.props.selectedItem,
    showItems: false,
    defaultValue: true,
    widthBox: this.props.widthBox,
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false,
      defaultValue: false,      
    })
  }

  render () {
    
    return(      
      <div className="select-box__box">
        <div className="select-box__container">
          <div className={`select-box__selected-item ${this.state.defaultValue ? "" : "black"}`}>       
            {this.state.selectedItem.value}
          </div>
          <div
            className="select-box__arrow"
            onClick={this.dropDown}>
            <span className={`${this.state.showItems ? 'select-box__arrow_up' : 'select-box__arrow_down'}`}/>
          </div>
        </div>
        <div
          className={`select-box__items ${this.props.widthBox ? "" : "halfWidth"}`}
          style={{display: this.state.showItems ? 'block' : 'none'}}>
          {this.state.items.map(item => 
            <div
              key={item.id}
              onClick={() => this.selectItem(item)}
              className={this.state.selectedItem === item ? 'selected' : ''}>
              {item.value}
            </div>
          )}
        </div>
      </div>
    )
  }
}
