const v1 = 'ab' && 0 && 2; // v1 === 0 
const v2 = 'ab' && 2 && 3; // V2 === 3, 
const v3 = 'ab' || 0; // V3 === 'ab', 
const v4 = '' || 0 || 3; // V4 === 3