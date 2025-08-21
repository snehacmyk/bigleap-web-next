export default function ShapeBackground({image = 'about-left.png'}) {
    return (
        <div className="shape-background">
            <img src={image} alt="image" />
        </div>
    );
}
