import { Text } from './lib';
import './lib/components/scss/index.css';

export default function App() {
    return (
        <div className="app">
            <Text type="body" variant="body-lg">
                React Pluto Components (Design System + UI Kit)
            </Text>
            <Text type="text" variant="text-md">
                A package of small but beautiful React components from the planet Pluto.
            </Text>
        </div>
    )
}