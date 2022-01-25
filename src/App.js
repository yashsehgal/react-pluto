import { Heading, Text } from './lib';
import './lib/components/scss/index.css';

export default function App() {
    return (
        <div className="app">
            <Heading variant="4xl"
                style={{ textAlign: 'center' }}
            >
                React Pluto Components
            </Heading>
            <Text type="body" variant="body-lg"
                style={{ textAlign: 'center' }}
            >
                React Pluto Components (Design System + UI Kit)
            </Text>
            <Text type="text" variant="text-md"
                style={{ textAlign: 'center' }}
            >
                A package of small but beautiful React components from the planet Pluto.
            </Text>
        </div>
    )
}