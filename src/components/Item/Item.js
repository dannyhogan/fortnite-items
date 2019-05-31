import Component from '../Component.js';

class NewComponent extends Component {

    renderTemplate() {
        const item = this.props.item;

        return /*html*/`
            <li id="item">
                <img src="${item.item.images.information}">
            </li>
        `;
    }
}

export default NewComponent;