import Component from '../Component.js';

class Item extends Component {
    
    render() {
        const item = this.renderDOM();
        const itemData = this.props.itemData;
        const onClick = this.props.onClick;
        
        item.addEventListener('click', () => {
            onClick(itemData);
        });

        return item;
    }

    renderTemplate() {
        const itemData = this.props.itemData;

        return /*html*/`
            <li class="item">
                <img src="${itemData.item.images.background}">
                <h2>${itemData.item.name}</h2>
                <p>${itemData.item.type}</p>
            </li>
        `;
    }
}

export default Item;