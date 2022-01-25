export default function ScrollTo(query: string) {
    const element = document.querySelector(query);
    element && element.scrollIntoView({ behavior: 'smooth' });
}