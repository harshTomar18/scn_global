import { useState, useEffect } from 'react';

export const useIntersectionObserver = (options = {}) => {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((observedEntries) => {
            setEntries(observedEntries);

            // Auto-unobserve if it's meant to trigger only once
            observedEntries.forEach(entry => {
                if (entry.isIntersecting && options.triggerOnce !== false) {
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        elements.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                if (element) observer.unobserve(element);
            });
            observer.disconnect();
        };
    }, [elements, options.threshold, options.root, options.rootMargin, options.triggerOnce]);

    return [setElements, entries];
};

export const AnimateOnScroll = ({ children, className = '', animation = 'fade-up', delay = 0, style = {} }) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
            }
        );

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref]);

    return (
        <div
            ref={setRef}
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${animation} ${className}`}
            style={{ ...style, transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
