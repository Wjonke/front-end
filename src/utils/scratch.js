const pyRooms = {'The Half-full Mug': '{"name": "The Half-full Mug", "desc": "You enter a lively and crowded tavern. There is a door to the North and West", "NORTH": "", "EAST": "The Manaa Waste", "SOUTH": "The Land of Poison Tears", "WEST": "", "map": "[[1, 2, 5, 2, 1, 3, 5, 1, 4, 0, 5, 6, 3, 1, 4, 3, 4, 0, 1, 5],\\n       [0, 2, 0, 2, 2, 1, 4, 5, 5, 0, 6, 4, 5, 6, 0, 5, 3, 6, 5, 6],\\n       [6, 6, 0, 6, 1, 3, 2, 1, 1, 0, 0, 0, 2, 3, 5, 3, 1, 0, 3, 1],\\n       [3, 0, 6, 4, 5, 6, 0, 1, 5, 0, 2, 5, 1, 2, 0, 0, 4, 2, 3, 0],\\n       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\\n       [1, 3, 2, 0, 1, 3, 0, 0, 6, 0, 2, 1, 1, 6, 5, 6, 0, 2, 3, 3],\\n       [3, 1, 1, 2, 5, 0, 2, 6, 0, 0, 1, 6, 6, 5, 2, 6, 4, 6, 5, 5],\\n       [5, 2, 6, 6, 2, 3, 6, 4, 0, 0, 6, 5, 0, 5, 1, 5, 1, 5, 0, 4],\\n       [5, 4, 4, 5, 0, 1, 4, 5, 3, 0, 4, 5, 1, 2, 4, 2, 6, 6, 6, 0],\\n       [1, 5, 2, 4, 4, 0, 3, 6, 6, 0, 2, 6, 2, 4, 4, 0, 6, 4, 0, 1]]"}', 'The Manaa Waste': '{"name": "The Manaa Waste", "desc": "Once a vibrant magical city, the remnants of the wasted realm stand as a warning to others. A cliff blocks any travel to the West.", "NORTH": "", "EAST": "The Spire of Lightning", "SOUTH": "The Wyvern Hills", "WEST": "The Half-full Mug", "map": "[[0, 4, 6, 6, 4, 4, 5, 3, 1, 0, 1, 0, 1, 5, 1, 1, 2, 4, 6, 0],\\n       [5, 0, 4, 6, 2, 4, 5, 4, 4, 0, 6, 2, 1, 2, 2, 2, 4, 1, 5, 3],\\n       [0, 0, 1, 0, 0, 4, 0, 5, 0, 0, 4, 6, 2, 4, 3, 3, 4, 0, 1, 4],\\n       [1, 0, 3, 0, 4, 4, 4, 5, 6, 0, 5, 2, 3, 5, 3, 5, 5, 2, 6, 2],\\n       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\\n       [4, 5, 6, 2, 0, 0, 0, 1, 1, 0, 0, 4, 3, 5, 1, 3, 0, 5, 5, 1],\\n       [4, 3, 1, 5, 1, 4, 2, 4, 3, 0, 1, 2, 1, 2, 4, 0, 0, 5, 2, 2],\\n       [2, 4, 1, 6, 3, 3, 0, 0, 2, 0, 3, 1, 6, 3, 3, 1, 1, 4, 3, 1],\\n       [5, 5, 2, 6, 3, 2, 5, 4, 1, 0, 1, 3, 1, 4, 4, 0, 4, 0, 3, 3],\\n       [6, 5, 2, 2, 5, 3, 5, 0, 3, 0, 3, 2, 3, 0, 2, 5, 4, 4, 6, 0]]"}', }


let rooms = JSON.stringify(pyRooms)



rooms = JSON.parse(rooms)
console.log(rooms)
export default rooms;