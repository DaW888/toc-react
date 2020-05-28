import React, {useEffect} from 'react';
import './App.css';
import * as tocbot from 'tocbot';

function App() {

    useEffect(() => {
        tocbot.init({
            // Where to render the table of contents.
            tocSelector: '.js-toc',
            // Where to grab the headings to build the table of contents.
            contentSelector: 'main',
            // Which headings to grab inside of the contentSelector element.
            headingSelector: 'h1, h2, h3',
            // For headings inside relative or absolute positioned containers within content.
            hasInnerContainers: true,
            // Main class to add to lists.
            linkClass: 'toc-link',
            // Class that gets added when a list should be collapsed.
            isCollapsedClass: 'is-collapsed',
            // Smooth scrolling enabled.
            scrollSmooth: true,
            // Smooth scroll duration.
            scrollSmoothDuration: 420,
            headingsOffset: 40,
            collapseDepth: 0,
        });
    }, [])

    return (
        <div className="App">
            <nav className="js-toc"></nav>
            <main>

                <h1 id="1">Title 1</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>
                    <h2 id="h2"> inner h2</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>

                <h1 id="2">Title 2</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>
                <h1 id="3">Title 3</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>
                <h1 id="4">Title 4</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>
                <h1 id="5">Title 5</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.


                </p>
                <h1 id="6">Title 6</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>
                <h1 id="7">Title 7</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore esse fugiat inventore mollitia
                    nam
                    officiis perferendis veniam.
                    Asperiores blanditiis ea enim esse explicabo nam necessitatibus obcaecati officia sunt ut.

                </p>
            </main>

        </div>
    );
}

export default App;
