import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class D20InputService {
  inputStr = `Tile 3623:
.##...#.#.
..##..#...
#......#.#
#.#..#.#..
##......#.
......#..#
###...#.#.
#.#.#.#.#.
......####
#####....#

Tile 1301:
.#..###..#
.##..##..#
#.......#.
###...###.
##.#..#.##
.#.##.##..
#.#####.##
#..##.....
#......#..
...#...#..

Tile 3089:
######.##.
.#...#..##
#.#.##.#.#
#....#....
#.....#..#
#.##..#..#
.##..#..#.
#.##...##.
#..#.###..
#.###.#..#

Tile 3217:
#.######..
...#.#...#
.#.#..#...
#.#.##...#
#..#..#...
...#......
..#..#.###
#.#...##..
#...#..#..
..##.##..#

Tile 3203:
.##...#..#
#...##...#
#....#....
#.###....#
#.##......
.....#.#..
....#....#
#..#.....#
#......#.#
##.#.###..

Tile 3467:
.#....#.#.
...###...#
#...#.####
..###.#..#
.....####.
#...##.##.
##.#.#.#..
##....#..#
##......#.
#####..###

Tile 1013:
#.....##..
.#..#..###
##....#.#.
#.#.##.#.#
###....#..
#...#..#..
#.##....#.
...#......
.......#..
.##.#..#..

Tile 2843:
.##.#...##
#.###.#...
#....##.#.
#...###.#.
.#..#.....
.....##...
###.##..#.
...#..#...
#.#....#..
#.####..#.

Tile 1549:
###...#...
.#.##....#
.......#..
#.###...##
##..#..#..
.#.#......
#.####...#
#.##....##
#.......#.
#.#.###.#.

Tile 2591:
######.#.#
.###.....#
#..####.##
#..#..#..#
...#.#.##.
...###....
.#...#..#.
.##....#..
...##....#
##...#....

Tile 2897:
###..##.#.
...#..##..
..........
.....#...#
....###..#
...#.#...#
#..###.#..
.....#...#
#....#....
...#####..

Tile 3433:
##...#....
#.##.....#
..##...##.
#..##...#.
#..#.#..##
#.#....#..
....##...#
#..#......
###.#.....
.#.#.#..##

Tile 1153:
#.#.##..##
##..###...
#..#.....#
....#.#.##
.#.#...#..
#....#...#
.#.....#..
#..#..###.
..#.#.##.#
##...##...

Tile 1223:
.#..###.#.
.....#.#..
....#....#
..#.......
##.###...#
..#.#.#..#
.##.......
.##......#
#........#
......#...

Tile 1579:
.##.####.#
..........
..........
.........#
##..#..#..
#.##....#.
##...#....
#..#.#...#
..##.#...#
###..#..#.

Tile 2687:
#..#.#....
##...#....
#...#.##..
.....#..#.
#.........
#...#....#
#....#...#
..........
##.....###
###..#.###

Tile 3881:
..##..###.
##.#...#.#
..#....#.#
##........
#........#
#........#
#..#...###
#.##.#.#..
.....#..##
###...#.##

Tile 3169:
...#.#####
#.........
.......##.
.#..#.#...
#.......#.
...##....#
#.#.#.#..#
...#.#....
#.......##
.....##.##

Tile 1973:
##..###...
.#.#.##...
#......#..
#...#...##
#..#.#..#.
#.#.#..#.#
.......##.
.#.....#.#
...#..###.
##.#.#..#.

Tile 3581:
####.###..
..#......#
..##.....#
.#.####...
...#..#.#.
....#....#
.#.....#..
###.#.#...
#......###
##...#...#

Tile 1723:
..####...#
##........
......#..#
...#...#.#
#.##.#..##
#.....##.#
..#......#
..........
...#.#...#
#..#.##.#.

Tile 2539:
#.##.#..##
#....#...#
#.##..#.##
......##..
.....#..##
#....#...#
......#..#
###.###..#
......#...
..#.##..##

Tile 2531:
....##.##.
#..#.#..#.
....#....#
...##.#..#
.##..#..#.
.#....###.
#.####.#.#
....#..#.#
###..##.##
.#...##..#

Tile 3917:
#.#...#...
#.#.......
.#.##.#...
.##...#...
..##.##.##
#.....#...
#...#...#.
#.##.....#
..#..#..#.
#..##....#

Tile 1489:
..#..#.###
#...#####.
....##...#
.#.##.##.#
.####....#
...#...###
..........
#..##.#.#.
##..#.#.#.
#.##...###

Tile 1669:
##.##.###.
...#....##
#.#.....##
..#....#.#
.#.#...#..
####.##...
#..###..#.
#..##...##
#.#.#.....
######.#.#

Tile 2549:
###.#.....
......#.#.
#.#...#..#
#....##...
...#...#.#
##.......#
##...#...#
......#..#
#.....#.##
..#.#...#.

Tile 3797:
.#####...#
#..##.#..#
##.###.#..
##..##....
..####....
...#...#.#
##..#.##.#
....#....#
.####.#...
.....##.#.

Tile 2137:
#.#..#.###
..##....##
....##...#
##.#..#...
.##.##.###
##...#.#.#
#.....#.#.
..#..#...#
##..#.###.
#...##.##.

Tile 2087:
#.#...##..
..###.....
##.#....#.
#........#
..#.#..#.#
.#..#...##
.##......#
...#..#..#
#.#..#....
######..##

Tile 3929:
...##.#.#.
..#..#...#
.#.###....
.##.......
...##.#.##
#...###.#.
#.##.#....
#.#....##.
.........#
.###.#####

Tile 1907:
#.###.#.#.
#........#
##.#.##..#
...#...##.
##.#....#.
.....#..#.
.###...##.
.#.......#
.#...###..
#..#.#.##.

Tile 3923:
..#..##...
........#.
#....###..
.........#
...#.###..
#...####.#
..##...#..
.##......#
#.....#...
.#.....#.#

Tile 2833:
###.#.##.#
#..###...#
##..#.....
#..##.#...
..#..#.#.#
..##.....#
#........#
#...#.#...
##..#...#.
.#########

Tile 2143:
#.##.##..#
#..#.##..#
..#....#.#
##.#.#...#
....#...#.
#.........
##...#.##.
#.##.###.#
....##...#
#...##.#.#

Tile 2039:
#.##..##..
....##.#..
#...#.##.#
##.#.#....
.......#..
#.##....##
.#..##.#..
...##.....
#...#....#
##....#.#.

Tile 3943:
#.#..#.#..
##..#...##
...#.#...#
.###.#.##.
..#...#.##
....#..###
#..#...#..
#..#.##.##
##.###...#
##...#####

Tile 1697:
.#..#####.
#....####.
.#.#.....#
.........#
..#......#
.#.#.....#
#..##.##..
##.#....#.
.##..#....
#.##.#####

Tile 1621:
..#.###..#
...###..#.
..........
#........#
##........
#.##....#.
#...#.....
....#.#..#
#.........
.###.###..

Tile 2683:
#..######.
.#......#.
....#.#..#
##......#.
...#.....#
......#..#
##.......#
.#...#.###
###.#....#
##.###.#.#

Tile 2203:
##..##...#
..#..#...#
##...#....
##..##....
#...###..#
...#..#.##
#.....##.#
..#...#..#
###....#..
####.#..#.

Tile 3469:
###...##.#
#.#..#####
..#.#.#..#
#..#......
#...#....#
##....#..#
#...##....
.#.#.###..
..#..##.#.
..##.#.#.#

Tile 1801:
..#....#.#
#...#..#..
.#..#....#
##..#.#.#.
##.###.#.#
..##..#...
##..##....
..#...####
#.#.....#.
.#.......#

Tile 3373:
#.#..#..#.
....##.#..
#......###
#....###.#
##.#.#####
#..#...##.
#.##....#.
.##.....#.
......#...
##..##.##.

Tile 2237:
.###.#....
..#..##..#
#.#.##.#..
#.#.##..#.
...#..#..#
#.##...#..
####...###
#..#.....#
..#.....##
###..#..##

Tile 2221:
#.###.....
...##.....
..#.#.....
#..##.....
......#.##
.....#.#..
.#.#.....#
....###...
#....#.##.
##.#####.#

Tile 2927:
#.###...##
......##..
.......###
##....##.#
..#...#...
..#...#.##
#..#...#..
.........#
.#..#...##
.####.#.#.

Tile 1861:
.#.#...#..
..#.......
##.....#..
#....#....
##..#....#
.##.#.##.#
....##..##
##.#....#.
#.....###.
#..#.....#

Tile 1097:
#......#.#
#....##..#
###.#..###
...#......
..#....#.#
#...#.....
##..##.#.#
###...##..
#..##...##
..###....#

Tile 3331:
#..##.#..#
#.###.##.#
.#.##...#.
...#.##..#
.........#
......##..
#..#.....#
..#....###
...#.....#
.##.#.##.#

Tile 1033:
#.##..#.##
..#.......
...#...#..
....##.###
##.####..#
#.#.##.##.
.#..#..#..
.........#
#.#.......
##.####..#

Tile 1933:
..##....##
#...#.##.#
##....####
......#.#.
......###.
#...#..###
#...#.....
......##..
......#..#
#....###..

Tile 1483:
#.###....#
#.###...##
..........
..#.#.#..#
........##
....#.....
#.##.#...#
....##....
....#.##..
....#..#..

Tile 3823:
#.###.###.
.##..#.##.
#...#..#..
#.##....#.
....#.....
###.####.#
.#.##.#.##
...##..#..
#..#.#..#.
..#.##..#.

Tile 1759:
#..##...#.
.####..###
#.#......#
.##...#..#
##........
##......##
#..##....#
..#...##..
#......#.#
####.#..##

Tile 1187:
.##.#..###
....##....
##.#......
#..##....#
#.#.#.#.#.
..#.###...
....##...#
..##.#..##
#.#...#...
..#.##..##

Tile 2857:
..#.....#.
..#..##..#
##.#..#..#
..#..###.#
#........#
...##....#
#...#...#.
##.....#.#
##...##...
#.#..#....

Tile 1811:
.#.######.
#.......#.
....#..###
##.....#..
###....#..
..#.#..##.
#....#..##
#......##.
#.#....##.
...#...###

Tile 1511:
##.#.#####
.....#..##
#....#.#.#
..#..##..#
#.......#.
#..##....#
###.#.##.#
#.......##
###...#.#.
.##....#..

Tile 2999:
#####.####
##.......#
..#...#.#.
.....#.##.
.....#..#.
.......###
#.....#...
#....#....
#...####..
###.#...##

Tile 3209:
..#####...
#.#.#....#
#...#...##
##........
.....##.#.
#..##.....
..#.#.##.#
##..##...#
#.#......#
#..#.#.#..

Tile 2273:
#####..#.#
...###...#
#..##....#
#......#.#
..##.....#
##.....#.#
#..#..#.##
#...##....
........#.
##.#.####.

Tile 1583:
#.###.##..
.#.#.#.#..
........##
...##...#.
##..#.#..#
...#.....#
#........#
.....##...
######.###
#.#..#.#.#

Tile 1787:
###.#####.
#...#.#..#
#........#
.#..##....
...#..#..#
#.#...#...
#....#....
.#....#..#
#.#.#....#
####.#.#.#

Tile 3323:
###..##...
#.....##..
#...###...
##..##..##
#..#.#.#.#
.......##.
#...#....#
.....#.#..
..#.#..#..
#.##.###..

Tile 1429:
...##..#.#
..........
....#..#.#
.........#
.#.......#
.##....#..
...#.#..#.
.#.#..#..#
####.##...
#.#######.

Tile 3221:
...#..#..#
#..#..##..
....###.#.
######...#
....#..#..
#....#.#..
###..#...#
.........#
#....##..#
###.#.###.

Tile 3299:
###.###..#
...#.#.##.
#...##....
.....#..#.
...#.....#
#.#.......
#....#..#.
.#.#.....#
...#.....#
.##...####

Tile 1741:
#..##.##.#
.##..#..##
#.###..##.
#.......#.
##.....#.#
#..#.#....
##.#..##..
####.##.##
#........#
.###.#...#

Tile 1063:
##.##...#.
.#..##....
...#...#..
#.#.....##
.##....#..
#.#.#.....
####.#..##
.#.##.....
.#.##....#
#.#..##.#.

Tile 2381:
...####.##
#.#.##...#
....#.....
.#..#.##.#
##.###.#..
###......#
#.....#...
##.####...
..#...####
#.####.##.

Tile 3463:
.###.#.#..
####.#.###
.#..#.....
##........
#.##...#.#
.#........
#...#...#.
......#..#
##.#..#...
..#..#..##

Tile 2063:
#..#.#.###
#.##.....#
..#....#..
.#...#..##
.####...##
##..##.#..
.........#
..##......
#....#...#
...##...#.

Tile 1487:
##..##.###
#........#
....#....#
.....#..##
#....#....
#.#...#.#.
#....#.#..
.#..##...#
.#...#.#.#
#..####.#.

Tile 2243:
.#..#.#.#.
###...#...
...##.....
.#...###..
.#.#..##..
#..###..##
..#..##.##
..##.....#
....#.#...
.....#####

Tile 1657:
##...#.#..
#...####..
#...##.#..
......#.##
..#.....##
###....###
##.#.##...
.#.#...#..
#........#
..####.###

Tile 2081:
########..
#.#.#...##
#.#...#...
###.#.#.#.
#.......#.
...#.#....
##........
#.##.#..#.
#.###.....
..#.#.###.

Tile 2287:
######..##
#......#..
....#.....
#..#.#....
##...#....
#..#....##
#....#....
#.........
#..#....#.
......###.

Tile 1181:
.####.##.#
..#....###
#.........
.....#....
.##..#.##.
#####..#..
...#..###.
##...#.#..
#..#.##...
..#.#....#

Tile 3041:
##..#.####
#..#....#.
#.#..#..#.
#....#...#
#........#
#.....#...
##..#.....
..####..#.
..##....##
.#.####.##

Tile 1319:
###.#...##
##....#...
.....##.##
...#.###.#
#......#..
##..#.....
##...##.#.
...#...#..
#.###.#.#.
.######...

Tile 3271:
...##.####
#.......#.
.#........
#......#.#
..#..#..##
#.##.....#
...#..#.#.
.####..###
.....##..#
.#.##..##.

Tile 1279:
#..#.#.#..
#.##..#..#
##....#..#
..#.#....#
#.#...#...
.##....#..
###.#....#
....#...#.
.#....#.#.
########..

Tile 2029:
.#.....#.#
##.#.....#
..##....#.
.#.###.#..
.#....#.#.
#........#
.......###
#......##.
..#.#.#...
#..#..#.##

Tile 3361:
###.#.#.#.
...#...#..
#.#.#....#
#.......#.
....#..##.
#.##....##
..##..#.##
#..#...#.#
..#...#..#
..##.##..#

Tile 3889:
####.##.#.
#..#....#.
...##....#
#...#...#.
..#......#
..####...#
#.#..####.
##.......#
...#...#.#
#.#...##.#

Tile 2459:
...#.#.#.#
..#......#
...##.#...
.#..##...#
.#...#..##
.#....#..#
##.......#
##.#......
#.#.#.##.#
##..#.###.

Tile 1951:
.#.###.###
...#.#.###
#.......#.
..##.....#
...#...#..
#.#..##...
#.##......
#..#.###..
...###...#
#.....####

Tile 1627:
#.##......
#.#..#.#..
.##.......
.###....##
##..#..#..
..#....#.#
.##..#....
##.#.#....
##.......#
.##.#.#..#

Tile 1297:
##.#...#..
#....#.#.#
.......#..
##......#.
#...#.....
#........#
.....#.#.#
.#....#.#.
#..#..#..#
########.#

Tile 3989:
...#......
....#...#.
###.......
.#...###.#
##.#......
.#..#....#
.#...#.#.#
..#####..#
##....##.#
.#.#...###

Tile 3779:
#.#.##.#..
#.#......#
...#.....#
.#...#.#..
...##.#...
#..#..##.#
#....##...
###.#....#
.##..##..#
...##....#

Tile 3769:
....#..#..
##.#....#.
.#.##..#.#
#.##.#..##
....#.##..
#.....##..
#....##.#.
#.#.###.#.
##.#.###.#
.#...##...

Tile 3803:
#..#######
.#..###...
..#..#.###
##..#.#...
.###.....#
##........
#######...
#.#.##....
....#....#
##....#.#.

Tile 1777:
..#.##.##.
#.....#..#
....#..##.
..#..#...#
#....###.#
#....#..#.
.........#
#.....#..#
#.....#.#.
##.###..##

Tile 1663:
#.##..###.
#..#.#...#
.....#...#
..##.##...
#..##.....
#...#..#.#
#...#.#...
##.#.#...#
#.####...#
......#..#

Tile 3329:
..##.#...#
.#........
..##..##..
#...##.###
#.#.#..#.#
#..#.#...#
.....#.###
.##..#.#.#
.###..##..
#####....#

Tile 1459:
.#.....###
..........
#....#....
........#.
...##..###
...#......
.#..#.##.#
..#..#.###
#.#......#
.#.#...###

Tile 3343:
.##.##....
.##.#.####
#..#..#.#.
#.###....#
..#..#....
#.......##
#.#....##.
#........#
...#...#.#
...##...##

Tile 3793:
##.##....#
..##.....#
#..#..##.#
#...###.##
##........
#......#.#
.##....#..
#.#.#.....
...#....#.
#...##.###

Tile 3527:
###.#....#
#.#.##.#..
.#...#....
.........#
#......#.#
#.......##
...#.#....
....#...#.
#.....#.##
.#.######.

Tile 1721:
.###.#..##
#.###....#
#.#.#....#
##.#....#.
#.#...#..#
.#..#####.
##.#......
..#.###.#.
#......#.#
#.##....#.

Tile 2357:
##.##.#..#
..#.....#.
...#.#....
##.......#
#.#.#..#.#
#.#...#.##
##.....#..
#.....#...
#..##.....
#..######.

Tile 2207:
.##...###.
##..#.#.##
##..###..#
..#.###.##
...###...#
#..#.....#
.#.###....
.#..#.#...
#####...#.
.#...#...#

Tile 2633:
##.#.....#
.....#..##
......#.##
#........#
...###....
..#.#..#.#
#....#...#
##...#..#.
.#..#..###
######.##.

Tile 3253:
##...#.#..
.##.###.#.
#.......#.
....###..#
##.#..#...
...#.....#
#.....##.#
....#.....
##..##.#..
##..##.#.#

Tile 2293:
#.#..#...#
#.......##
#.#.#....#
#...##.##.
#.##.#....
#..#.#....
#.#.......
#........#
#........#
.#.#......

Tile 2671:
##.#.#...#
..##...#..
####...#..
##....#...
#...#....#
.....#..#.
.#.#..#.##
###.####.#
#.####.#.#
###.###.#.

Tile 3119:
........#.
...##...#.
#.#....##.
.#...#....
...#...##.
.###..#..#
.........#
#.#....#..
.#.......#
##......#.

Tile 3413:
.......#.#
##...#...#
......###.
#.#.......
##.#.....#
#..#....##
##..#...#.
..#.#.####
.#.....#.#
.....####.

Tile 2969:
...######.
.#.#....#.
#.#....#.#
....###.##
.....#.#..
..###..#.#
#.##....#.
..###.#...
..#.......
.......#.#

Tile 2713:
..#.#.#...
...#......
.....#....
.###.#...#
#..#......
#.#.###..#
#...##..##
###....##.
...#.##.#.
##..#..#.#

Tile 2749:
#.....#..#
.##.#...##
#..#....#.
..##..#...
.#..##...#
###..#...#
..#....#.#
#...##.###
#..#.....#
#.##..#...

Tile 1117:
...#..##.#
.....##...
...#.#..##
#.#.#....#
#.#...#...
.#######..
.#.#..###.
#...#.##.#
##....#...
..####..##

Tile 3517:
########.#
###..#.###
#.........
.#.....###
##...#...#
.#..#..#..
.##.####.#
......#..#
.....##..#
...#...#.#

Tile 1523:
#..####.#.
.#.....#..
#.#.......
....#.....
.....####.
#.#....##.
.#.....##.
.#..#.....
..#...#..#
###...####

Tile 2879:
.##...#...
##....####
..###...#.
.###.##..#
....##....
...##.....
##.#.#.#.#
#.#....##.
#..#......
###..#####

Tile 3851:
##.#.#.#.#
......##..
#....##.#.
##...#....
#..#..#.#.
....#####.
###.##...#
#...###.#.
#........#
.#..#..##.

Tile 2659:
##...####.
.........#
.###..#.##
#...###.#.
#.##.....#
#####...##
..#......#
##.#......
##...##...
#.....####

Tile 1171:
#.....#.##
.#...#....
.#...#...#
#...#...#.
#....#...#
....#...#.
.#..#.#.##
#....#.#.#
.#...#...#
##.......#

Tile 2711:
....#.###.
#....#.###
#..#..#.##
......#.#.
.#.#......
#.#....#.#
#.......##
...#......
.....#.#.#
......#..#

Tile 1543:
#..#..###.
..#.......
...#.#.#.#
#..#....#.
#.#.#....#
.##....###
..#..#...#
..#.#...#.
...#..#...
#####..##.

Tile 3163:
#.#.#.##..
........#.
..##.###..
#..#...#..
..#.#..#..
#.....###.
.#........
......#.#.
..#.#..#..
#.##.#...#

Tile 1249:
#....###.#
..#.###...
##...#..##
.#..#...#.
#.#.......
#......#.#
#.......##
..........
#........#
.##.###.#.

Tile 2003:
#.#..#..##
#..#.....#
#...#.##..
...###.##.
..#.#.....
#.##...#..
........##
###.#.#..#
.#.....#..
#.##.#.#..

Tile 2129:
#.....##..
.#...#...#
...#.....#
.....#.#.#
...##.#...
#.........
...#.#...#
.....##.##
...#..#..#
.####.#..#

Tile 3391:
.#.#...#..
#..#..#...
......#..#
#..#.#.#..
.#...##..#
#.#..#...#
....#....#
#.....#.##
#........#
..##..####

Tile 1867:
.##..##.##
....#...#.
##.#..#...
..##......
###.....#.
#........#
##.#...#.#
.#.#..##..
#.#...#...
##......#.

Tile 1747:
###..##.##
#...#.#.#.
..##......
#..####...
.#.###.##.
#......#.#
#...#.....
...##....#
.#.#......
#.#...##..

Tile 3191:
#...#...#.
..###.....
#.##.#....
.##...#...
#.###.##..
##.##..###
.###..####
#....#..#.
.....#....
.##.####..

Tile 3511:
.##.##.###
#.#.#.##.#
....#...##
....#...#.
#.##.#.#..
##...##..#
#.#....#.#
#.#...#...
..........
....#.#.#.

Tile 2657:
####..##.#
.#..#...##
....#.##.#
.......#..
#.#..#....
.#.#..#.##
######....
.....##..#
...#..##.#
#.#.####.#

Tile 3697:
#####.#..#
#.##.#..#.
##.##..#..
#.#.##..#.
##.####..#
.###.....#
.#....##.#
..#.##..#.
#.........
##..###.#.

Tile 1123:
.....#...#
#.......##
##.#..##.#
..........
..##......
...#..##.#
####.....#
.##......#
##........
.#.......#

Tile 2729:
.##....###
#...###.#.
###.#...##
#.##...#..
##......##
....#...##
#.....#...
#.##..###.
....#.#...
#..####.##

Tile 3533:
..#.##..#.
..##.#...#
#....##..#
#.....##..
#.....#..#
..........
#..#..##..
#.....##..
.#..##...#
.##.#.#.#.

Tile 3919:
#...#.....
#....###..
.....###..
##...#...#
.#..##....
..##...#.#
.........#
..#.###...
##........
####.##...

Tile 1453:
#.....##.#
#.......#.
.#.#..#.##
#....#...#
......##..
....#....#
..#..#..##
##..#.##.#
#....##...
#####.##.#

Tile 3643:
..#.#.####
.........#
#...#.##.#
...##...##
.#......##
#.#....#..
.#........
#.#.#....#
####.....#
###.####..

Tile 2767:
.##..####.
...#...#..
..#......#
....#.####
.#.#..#.#.
#.....#.#.
##..#...#.
#.###.#...
#...##...#
...##.#.#.

Tile 3541:
##.##...##
#.....##.#
#........#
.#..##....
#......#..
......#..#
#....#..#.
.#.#.#.#..
###..#..#.
#.######..

Tile 3617:
###..#....
#..#......
.......##.
....#...##
#...#..#..
.#..#...#.
#..#.#..#.
.........#
#...#..#.#
#..#.#..#.

Tile 1229:
.#...#.##.
.......#..
#.#.#.#.##
###..#...#
#.#..#...#
...##.#..#
.#.#......
#....#...#
#..#..####
#.##..###.

Tile 1259:
#..##.####
.........#
.#...####.
#.#..#...#
#.#...#.##
#...#.#.#.
......#..#
#.........
....#.....
.##..####.`;

  testInput = `Tile 2311:
..##.#..#.
##..#.....
#...##..#.
####.#...#
##.##.###.
##...#.###
.#.#.#..##
..#....#..
###...#.#.
..###..###

Tile 1951:
#.##...##.
#.####...#
.....#..##
#...######
.##.#....#
.###.#####
###.##.##.
.###....#.
..#.#..#.#
#...##.#..

Tile 1171:
####...##.
#..##.#..#
##.#..#.#.
.###.####.
..###.####
.##....##.
.#...####.
#.##.####.
####..#...
.....##...

Tile 1427:
###.##.#..
.#..#.##..
.#.##.#..#
#.#.#.##.#
....#...##
...##..##.
...#.#####
.#.####.#.
..#..###.#
..##.#..#.

Tile 1489:
##.#.#....
..##...#..
.##..##...
..#...#...
#####...#.
#..#.#.#.#
...#.#.#..
##.#...##.
..##.##.##
###.##.#..

Tile 2473:
#....####.
#..#.##...
#.##..#...
######.#.#
.#...#.#.#
.#########
.###.#..#.
########.#
##...##.#.
..###.#.#.

Tile 2971:
..#.#....#
#...###...
#.#.###...
##.##..#..
.#####..##
.#..####.#
#..#.#..#.
..####.###
..#.#.###.
...#.#.#.#

Tile 2729:
...#.#.#.#
####.#....
..#.#.....
....#..#.#
.##..##.#.
.#.####...
####.#.#..
##.####...
##..#.##..
#.##...##.

Tile 3079:
#.#.#####.
.#..######
..#.......
######....
####.#..#.
.#...#.##.
#.#####.##
..#.###...
..#.......
..#.###...`;

  constructor() {}

  getRawInput(): string {
    return this.inputStr;
    return this.testInput;
  }
}
