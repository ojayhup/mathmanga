// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140004040404040404040404040404040404040404040407030303030303030303030303030306030304040303030303030303030303030303030303030404030603030404040404040405040404040303040403030303040404040404060303070304030304040404050404040303030403030303030403030404040303030304030303040404040303040303040404030303030503030303030604030304030304040406030303040303030303030403030403030404040404030304030303030303040303040303040404040403030403030303030304030604030304070304040303040303030303030403030403030403030404030304070203030301040303040306040303040403030404040404040404030304030304030304040303030303030303030303030403030403030404070303030303060303030307040303040303040404040404040404040404040404030304030304030303030303030303030303030303030403030503030303030303060303030303030307040303040404040404040404040404040404040404`, img`
22222222222222222222
2..................2
2..................2
2....2222222.2222..2
2....222222.....2..2
222.222...2.....2..2
22....2...2222..2..2
22...........2..2..2
22....2......2..2..2
2222..2......2..2..2
2222..2......2..2..2
..22..2......2..2..2
..22..2......2..2..2
..22..22222222..2..2
..22............2..2
..22............2..2
..222222222222222..2
..2................2
...................2
..222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight1,sprites.dungeon.floorLight4,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
