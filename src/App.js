import { useState } from 'react';
import { Heading, Text, Box, Elevation, Button } from './lib';
import './lib/components/scss/index.css';

export default function App() {
    return (
        <div className="app">
            <Elevation variant="sm">
                <Box className="hero-section"
                    style={{
                        width: 'fit-content',
                        padding: '0.6rem 1.4rem',
                    }}
                >
                    <Text type="body" variant="body-lg">
                        React Pluto Components (Design System + UI Kit)
                    </Text>
                    <Text type="text" variant="text-md">
                        A package of small but beautiful React components from the planet Pluto.
                    </Text>
                    <Button size="fw">
                        Check for Docs
                    </Button>
                </Box>
            </Elevation>
            <Box style={{ marginTop: '2.4rem' }}>
                <Button size="sm">
                    Button
                </Button>
            </Box>
        </div>
    )
}