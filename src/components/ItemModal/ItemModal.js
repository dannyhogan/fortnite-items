import Component from '../Component.js';

class ItemModal extends Component {

    renderTemplate() {
        return /*html*/`
            <div id="modal">
                <div id="overlay"></div>
                <div id="modal-content">
                    <h1>Item Name</h1>
                    <p>Dummy Text</p>
                    <img src="https://via.placeholder.com/200">
                    <button id="close-modal"></button>
                </div>
            </div>
        `;
    }
}

export default ItemModal;