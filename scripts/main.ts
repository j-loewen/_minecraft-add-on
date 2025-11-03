import {
    EntityDieAfterEvent,
    ItemUseAfterEvent,
    PlayerBreakBlockAfterEvent,
    PlayerHotbarSelectedSlotChangeAfterEvent,
    PlayerInventoryItemChangeAfterEvent,
    PlayerLeaveAfterEvent,
    PlayerPlaceBlockAfterEvent,
    PlayerSpawnAfterEvent,
    world
} from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    world.afterEvents.playerBreakBlock.subscribe(async (event: PlayerBreakBlockAfterEvent) => {});

    world.afterEvents.playerHotbarSelectedSlotChange.subscribe((event: PlayerHotbarSelectedSlotChangeAfterEvent) => {});

    world.afterEvents.playerInventoryItemChange.subscribe((event: PlayerInventoryItemChangeAfterEvent) => {}, {
        ignoreQuantityChange: true
    });

    world.afterEvents.playerPlaceBlock.subscribe((event: PlayerPlaceBlockAfterEvent) => {});

    world.afterEvents.playerLeave.subscribe((event: PlayerLeaveAfterEvent) => {});

    world.afterEvents.playerSpawn.subscribe((event: PlayerSpawnAfterEvent) => {});

    world.afterEvents.entityDie.subscribe((event: EntityDieAfterEvent) => {});

    world.afterEvents.itemUse.subscribe(async (event: ItemUseAfterEvent) => {});
});
