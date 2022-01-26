# React Pluto Component Design System + UI Kit

![Product Hunt Banner (Light)](https://user-images.githubusercontent.com/62352288/151165968-f4a1be72-32e0-46b7-8eed-f7c8853fcb5b.png)

A package of small but beautiful React components from the planet Pluto. To install the latest version, run this installation command.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yashsehgal/react-pluto)

<a href="https://www.producthunt.com/posts/react-pluto-components?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-pluto-components" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=328398&theme=dark" alt="React Pluto Components - Small but beautiful React components from the planet Pluto. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

```cmd
npm install react-pluto --save-dev
```

### How to import and start using Pluto Components

- For an instance, consider a component view named as `ScreenView`, and we need to use a button component.

```javascript
import { Button } from 'react-pluto';

export default function ScreenView() {
    return (
        <div className="screen-view">
            <Button>
                Pluto Button
            </Button>
        </div>
    )
}
```

- Passing custom properties is extremely easy in these components. You can easily pass style, className, id, methods, actions as props.

```javascript
import { Button } from 'react-pluto';

export default function ScreenView() {
    return (
        <Button style={{ background: 'black', color: 'white', width: '100%' }}>
            Pluto Button
        </Button>
    )
}
```

```javascript
import React, { useState } from 'react';
import { Button } from 'react-pluto';

export default function ScreenView() {
    const [currentValueRef, setCurrentValue] = useState(0);
    return (
        <React.Fragment>
            <h2>Current Value is: {currentValueRef}</h2>
            <Button onClick={() => setCurrentValue(++currentValueRef)}> 
                Pluto Button
            </Button>
        </React.Fragment>
    )
}
```

### Tools and Technologies used

- React
- CSS/SCSS
- Figma
- Notion
- Creative Mind

- You can check out more detailed resources
  - Figma Design File: https://www.figma.com/file/kNV6TrZSPWq2dllmwFtvDl/React-Pluto-Component-Design-System?node-id=0%3A1
  - Notion Developer Documentation: https://yashsehgal.notion.site/React-Pluto-Component-Design-System-UI-Kit-c50c6c5c6b46450bbee64a069dd8834a

**We would love if you will raise issues and new feature requests to make this library more better. Thanks for checking out, hope you liked it, if yes then please leave a star :star:**
