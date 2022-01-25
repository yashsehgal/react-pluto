import { useState } from 'react';
import { Heading, Text, Box, Elevation, Button } from './lib';
import './lib/components/scss/index.css';

export default function App() {
    const [hoverShadowRef, setHoverShadow] = useState("sm");
    return (
        <div className="app">
            <Elevation variant={hoverShadowRef}>
                <Box className="hero-section"
                    onClick={() => console.log("working...")}
                    style={{
                        width: 'fit-content',
                        padding: '0.6rem 2rem',
                        background: 'var(--p-primary-purple-1)'
                    }}
                    onMouseEnter={() => setHoverShadow("md")}
                    onMouseLeave={() => setHoverShadow("sm")}
                >
                    <Text type="body" variant="body-lg" style={{ color: 'var(--p-neutral-white)' }}>
                        React Pluto Components (Design System + UI Kit)
                    </Text>
                    <Text type="text" variant="text-md" style={{ color: 'var(--p-neutral-white)' }}>
                        A package of small but beautiful React components from the planet Pluto.
                    </Text>
                </Box>
            </Elevation>
            <Box style={{ marginTop: '2.4rem' }}>
                <Button size="sm">
                    Button
                </Button>
                <Button>
                    Button
                </Button>
                <Button size="lg">
                    Button
                </Button>
                <Button size="fw">
                    Button
                </Button>
            </Box>
        </div>
    )
}