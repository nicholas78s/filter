import React from 'react'

const projects = [{
  id: 1,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
  category: 'Business Cards'
}, {
  id: 2,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
  category: 'Websites'
}, {
  id: 3,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
  category: 'Websites'
}, {
  id: 4,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
  category: 'Websites'
}, {
  id: 5,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
  category: 'Business Cards'
}, {
  id: 6,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
  category: 'Websites'
}, {
  id: 7,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
  category: 'Websites'
}, {
  id: 8,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
  category: 'Business Cards'
}, {
  id: 9,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
  category: 'Websites'
}, {
  id: 10,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
  category: 'Flayers'
}, {
  id: 11,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
  category: 'Websites'
}, {
  id: 12,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
  category: 'Business Cards'
}, {
  id: 13,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
  category: 'Websites'
}, {
  id: 14,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
  category: 'Websites'
}, {
  id: 15,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
  category: 'Business Cards'
}, {
  id: 16,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
  category: 'Websites'
}, {
  id: 17,
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
  category: 'Flayers'
}];

class Button extends React.Component {
  render() {
    const {item, selected, onSelectFilter} = this.props;
    const className = (item === selected ? 'active': '');

    return <div className={className} onClick={(evt) => onSelectFilter(evt, item)}>{item}</div>;
  }
}

class Toolbar extends React.Component {
  render() {
    const {filters, selected, onSelectFilter} = this.props;

    return (
      <div className="toolbar">
        { filters.map(item => 
            <Button 
              key={item} 
              item={item} 
              selected={selected} 
              onSelectFilter={onSelectFilter}
            />
          )
        }
      </div>
      );
  }
}

class ProjectList extends React.Component {
  render() {
    const {projects} = this.props;

    return (
      <div className="projects"> {
          projects.map(item => 
            <img 
              key={item.id} 
              src={item.img}
            />
          )
        }
      </div>
    );
  }
}

export default class Portfolio extends React.Component {
  state = { selected: this.props.selected };

  onSelectFilter = (evt, item) => {
    this.setState((prev) => {
      return { selected: item };
    });
  };

  render() {
    return (
      <>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={(evt, item) => {this.onSelectFilter(evt, item)}}
        />
        <ProjectList projects={projects.filter(item => item.category === this.state.selected || this.state.selected === 'All')}/>
      </>
    );
  }
}
 