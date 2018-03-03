export default function createLevelFeature(featureGenerator) {
    return config => levelProperties => featureGenerator({
        ...config,
        ...levelProperties,
    });
}
