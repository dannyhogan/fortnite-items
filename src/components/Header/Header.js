import Component from '../Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>FORTNITE Item Shop</h1>
                <h3>View your favorite items from in-game!</h3>
            </header>
        `;
    }
}

export default Header;