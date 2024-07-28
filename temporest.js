function pointPosition(channel, model, _ref) {
    // Extracting necessary properties from _ref
    const { width, height } = _ref;

    // Example logic to calculate position based on channel, model, and _ref
    let positionX = calculatePositionX(channel, model);
    let positionY = calculatePositionY(channel, model, width, height);

    return { x: positionX, y: positionY };
}

function calculatePositionX(channel, model) {
    // Example logic for calculating X position
    return channel.length * model.length;
}

function calculatePositionY(channel, model, width, height) {
    // Example logic for calculating Y position
    return (width / model.length) + (height / channel.length);
}
