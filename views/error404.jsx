
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
            </main>
            <div>
                  <img src="/images/kitten404.jpg" alt="Surprised cat" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@tranmautritam">Tran Mau Tri Tam</a> on <a href="https://unsplash.com/photos/FbhNdD1ow2g">Unsplash</a>
                </div>
        </Def>
    )
}

module.exports = error404