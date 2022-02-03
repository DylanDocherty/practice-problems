/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/koko-eating-bananas/
 * 
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// var minEatingSpeed = function (piles, h) {
//     let greatestPile = 0;
//     let minHoursPerPile = h / piles.length;
//     piles.forEach((pile) => {
//         if (pile > greatestPile) {
//             greatestPile = pile;
//         }
//     });
//     return Math.ceil(greatestPile / minHoursPerPile);
// };

var minEatingSpeed = function (piles, h) {
    let tempPiles = [...piles];
    let found = false;
    let aggregate = piles.reduce((agg, value) => { return agg + value });
    // console.log(aggregate);
    let min = Math.ceil(aggregate / h);
    let hours = h;
    while (!found) {
        hours = h;
        tempPiles = [...piles];
        for (let i = 0; i < tempPiles.length; i++) {
            while (tempPiles[i] > 0 && hours > 0) {
                // console.log(piles);
                tempPiles[i] = tempPiles[i] - min;
                hours -= 1;
            }
        }
        if (!tempPiles.some((value) => {
            return value > 0;
        })) {
            found = true;
        } else {
            min += 1;
            hours = h;
            tempPiles = [];
        }
    }
    return min;
};

let piles = [3, 6, 7, 11], h = 8;
// console.log(minEatingSpeed(piles, h));

// piles = [30, 11, 23, 4, 20], h = 5;
// console.log(minEatingSpeed(piles, h));

// piles = [30, 11, 23, 4, 20], h = 6;
// console.log(minEatingSpeed(piles, h));
piles = [332484035, 524908576, 855865114, 632922376, 222257295, 690155293, 112677673, 679580077, 337406589, 290818316, 877337160, 901728858, 679284947, 688210097, 692137887, 718203285, 629455728, 941802184];
h = 823855818;
console.log(minEatingSpeed(piles, h));
piles = [848219518, 588431922, 679783979, 432047681, 558963869, 874763943, 356682090, 514921461, 639400033, 842625686, 737707391, 663203571, 195860905, 278665278, 886595950, 837136539, 649029499, 866615005, 314734742, 888429433, 348422147, 634905317, 222096525, 926976060, 731794241, 636342449, 57112531, 790567866, 296797429, 756486656, 972612015, 439134823, 20840594, 812172762, 722611086, 617646271, 594776717, 912921645, 892159640, 674448885, 645585171, 658634155, 78508257, 946709338, 376077435, 846624429, 996828412, 236496810, 946919361, 414390039, 60947718, 973801466, 452874238, 334628044, 117140771, 402855733, 278663893, 259369536, 159585958, 501119979, 992853641, 292301385, 614052668, 417035905, 172421780, 669155352, 214329208, 96847320, 398325069, 739265267, 444152648, 820224819, 741012408, 656370372, 750877554, 562792394, 269958723, 158621149, 242126959, 211043846, 48918663, 759208762, 16593653, 233539975];
h = 558918813;
console.log(minEatingSpeed(piles, h));

piles = [159061844, 517725047, 376711793, 557608450, 386051217, 915761849, 443805917, 541997964, 420003629];
h = 771473915;
console.log(minEatingSpeed(piles, h));
