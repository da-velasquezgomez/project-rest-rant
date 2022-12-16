const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                  <img src="/images/foodyum.jpg" alt="Breakfast toasts" width="500" height="400"/>
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@ellaolsson">Ella Olsson</a> on <a href="https://unsplash.com/photos/2IxTgsgFi-s">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home


