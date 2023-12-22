export const getUniqueBrands = (mobiles) => {
  const brandsSet = new Set();
  return mobiles?.reduce((uniqueBrands, mobile) => {
    if (!brandsSet.has(mobile.brand)) {
      brandsSet.add(mobile.brand);
      uniqueBrands.push({
        label: mobile.brand,
        value: mobile.brand,
      });
    }
    return uniqueBrands;
  }, []);
};

export const getUniqueOs = (mobiles) => {
  const osSet = new Set();
  return mobiles?.reduce((uniqueos, mobile) => {
    if (!osSet.has(mobile.os)) {
      osSet.add(mobile.os);
      uniqueos.push({
        label: mobile.os,
        value: mobile.os,
      });
    }
    return uniqueos;
  }, []);
};

export const getUniqueProcessor = (mobiles) => {
  const processorSet = new Set();
  return mobiles?.reduce((uniqueProcessor, mobile) => {
    if (!processorSet.has(mobile.processor)) {
      processorSet.add(mobile.processor);
      uniqueProcessor.push({
        label: mobile.processor,
        value: mobile.processor,
      });
    }
    return uniqueProcessor;
  }, []);
};

export const getUniqueMemory = (mobiles) => {
  const memorySet = new Set();
  return mobiles?.reduce((uniqueMemory, mobile) => {
    if (!memorySet.has(mobile.memory)) {
      memorySet.add(mobile.memory);
      uniqueMemory.push({
        label: mobile.memory,
        value: mobile.memory,
      });
    }
    return uniqueMemory;
  }, []);
};

export const getUniqueStatus = (mobiles) => {
  const statusSet = new Set();
  return mobiles?.reduce((uniqueStatus, mobile) => {
    if (!statusSet.has(mobile.status)) {
      statusSet.add(mobile.status);
      uniqueStatus.push({
        label: mobile.status,
        value: mobile.status,
      });
    }
    return uniqueStatus;
  }, []);
};

export const getUniqueType = (mobiles) => {
  const typeSet = new Set();
  return mobiles?.reduce((uniqueType, mobile) => {
    if (!typeSet.has(mobile.type)) {
      typeSet.add(mobile.type);
      uniqueType.push({
        label: mobile.type,
        value: mobile.type,
      });
    }
    return uniqueType;
  }, []);
};
