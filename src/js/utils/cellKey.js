import requiredProp from '~/utils/requiredProp';

export default ({
    x = requiredProp('x'),
    y = requiredProp('y')
}) => `${x},${y}`;
