module.exports = [
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        datasources: {
            db: {
                // Append connection pool params directly so they survive .env parsing
                url: process.env.DATABASE_URL
            }
        },
        log: ("TURBOPACK compile-time truthy", 1) ? [
            'error',
            'warn'
        ] : "TURBOPACK unreachable"
    });
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalThis.prismaGlobal = prisma;
}),
"[project]/app/lib/actions/service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000d281e9d842c89c6394975c162414d293fdc1d71":"getServiceCategories","000e4ed396d61f13e39cfb72fd6d2f603dc169d2f8":"getServices","4017821dc0f96d9dfcc71e7dc8ca2263162e98e33b":"createServiceCategory","402cce84c6d2ca9b47710e38d30891039b03e5eaec":"deleteService","403be0f5da56fa15e4c0c646e5b012be1ee4db5ec1":"deleteServiceMedia","405c3e6bd0782b34f0b2e3d10d79c29d854108f30f":"createServiceMedia","4064165c1e863fc4e6453aeac82f6cf0eb34fe0092":"deleteServiceCategory","407ab099bc409f53835a2ef6650f0e4bee5b1464db":"updateServicesOrder","4083388c85d6ba2523a97ed4ee7fc0502a69c94b42":"createServiceFeature","40faea0cbf714b5bd152990a000dce5c8deed19ebf":"deleteServiceFeature","40fb7c3f267e66030374798416898ccf9468c21f05":"createService","600c9a43c80455332e2f2ffa12ffbc024adf918b05":"updateServiceCategory","6076406ad834aa1eb65b8631ebb997f2402ed681a0":"updateService","60d44d4ca59fd8e4fff7ce64d77b52460de80802ac":"updateServiceFeature"},"",""] */ __turbopack_context__.s([
    "createService",
    ()=>createService,
    "createServiceCategory",
    ()=>createServiceCategory,
    "createServiceFeature",
    ()=>createServiceFeature,
    "createServiceMedia",
    ()=>createServiceMedia,
    "deleteService",
    ()=>deleteService,
    "deleteServiceCategory",
    ()=>deleteServiceCategory,
    "deleteServiceFeature",
    ()=>deleteServiceFeature,
    "deleteServiceMedia",
    ()=>deleteServiceMedia,
    "getServiceCategories",
    ()=>getServiceCategories,
    "getServices",
    ()=>getServices,
    "updateService",
    ()=>updateService,
    "updateServiceCategory",
    ()=>updateServiceCategory,
    "updateServiceFeature",
    ()=>updateServiceFeature,
    "updateServicesOrder",
    ()=>updateServicesOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getServiceCategories() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceCategory.findMany({
        orderBy: {
            order: 'asc'
        },
        include: {
            _count: {
                select: {
                    services: true
                }
            }
        }
    });
}
async function createServiceCategory(data) {
    const category = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceCategory.create({
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            icon: data.icon,
            order: data.order || 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return category;
}
async function updateServiceCategory(id, data) {
    const category = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceCategory.update({
        where: {
            id
        },
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            icon: data.icon,
            order: data.order
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return category;
}
async function deleteServiceCategory(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceCategory.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
}
async function getServices() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].service.findMany({
        orderBy: {
            order: 'asc'
        },
        include: {
            category: true,
            features: {
                orderBy: {
                    order: 'asc'
                }
            },
            media: {
                orderBy: {
                    order: 'asc'
                }
            }
        }
    });
}
async function createService(data) {
    const service = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].service.create({
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            shortDescriptionEL: data.shortDescriptionEL,
            shortDescriptionEN: data.shortDescriptionEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            slug: data.slug,
            featureImage: data.featureImage,
            brandName: data.brandName,
            brandLogo: data.brandLogo,
            order: data.order || 0,
            categoryId: data.categoryId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return service;
}
async function updateService(id, data) {
    const service = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].service.update({
        where: {
            id
        },
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            shortDescriptionEL: data.shortDescriptionEL,
            shortDescriptionEN: data.shortDescriptionEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            slug: data.slug,
            featureImage: data.featureImage,
            brandName: data.brandName,
            brandLogo: data.brandLogo,
            order: data.order,
            categoryId: data.categoryId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return service;
}
async function deleteService(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].service.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
}
async function updateServicesOrder(items) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(items.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].service.update({
            where: {
                id: item.id
            },
            data: {
                order: item.order
            }
        })));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
}
async function createServiceFeature(data) {
    const feature = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceFeature.create({
        data: {
            serviceId: data.serviceId,
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            order: data.order || 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return feature;
}
async function updateServiceFeature(id, data) {
    const feature = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceFeature.update({
        where: {
            id
        },
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            order: data.order
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return feature;
}
async function deleteServiceFeature(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceFeature.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
}
async function createServiceMedia(data) {
    const media = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceMedia.create({
        data: {
            serviceId: data.serviceId,
            url: data.url,
            mediaType: data.mediaType,
            order: data.order || 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
    return media;
}
async function deleteServiceMedia(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].serviceMedia.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/services");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getServiceCategories,
    createServiceCategory,
    updateServiceCategory,
    deleteServiceCategory,
    getServices,
    createService,
    updateService,
    deleteService,
    updateServicesOrder,
    createServiceFeature,
    updateServiceFeature,
    deleteServiceFeature,
    createServiceMedia,
    deleteServiceMedia
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServiceCategories, "000d281e9d842c89c6394975c162414d293fdc1d71", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createServiceCategory, "4017821dc0f96d9dfcc71e7dc8ca2263162e98e33b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateServiceCategory, "600c9a43c80455332e2f2ffa12ffbc024adf918b05", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteServiceCategory, "4064165c1e863fc4e6453aeac82f6cf0eb34fe0092", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServices, "000e4ed396d61f13e39cfb72fd6d2f603dc169d2f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createService, "40fb7c3f267e66030374798416898ccf9468c21f05", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateService, "6076406ad834aa1eb65b8631ebb997f2402ed681a0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteService, "402cce84c6d2ca9b47710e38d30891039b03e5eaec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateServicesOrder, "407ab099bc409f53835a2ef6650f0e4bee5b1464db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createServiceFeature, "4083388c85d6ba2523a97ed4ee7fc0502a69c94b42", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateServiceFeature, "60d44d4ca59fd8e4fff7ce64d77b52460de80802ac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteServiceFeature, "40faea0cbf714b5bd152990a000dce5c8deed19ebf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createServiceMedia, "405c3e6bd0782b34f0b2e3d10d79c29d854108f30f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteServiceMedia, "403be0f5da56fa15e4c0c646e5b012be1ee4db5ec1", null);
}),
"[project]/.next-internal/server/app/admin/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/lib/actions/service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions/service.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/lib/actions/service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000d281e9d842c89c6394975c162414d293fdc1d71",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceCategories"],
    "000e4ed396d61f13e39cfb72fd6d2f603dc169d2f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "4017821dc0f96d9dfcc71e7dc8ca2263162e98e33b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServiceCategory"],
    "402cce84c6d2ca9b47710e38d30891039b03e5eaec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteService"],
    "403be0f5da56fa15e4c0c646e5b012be1ee4db5ec1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteServiceMedia"],
    "405c3e6bd0782b34f0b2e3d10d79c29d854108f30f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServiceMedia"],
    "4064165c1e863fc4e6453aeac82f6cf0eb34fe0092",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteServiceCategory"],
    "407ab099bc409f53835a2ef6650f0e4bee5b1464db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateServicesOrder"],
    "4083388c85d6ba2523a97ed4ee7fc0502a69c94b42",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServiceFeature"],
    "40faea0cbf714b5bd152990a000dce5c8deed19ebf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteServiceFeature"],
    "40fb7c3f267e66030374798416898ccf9468c21f05",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createService"],
    "600c9a43c80455332e2f2ffa12ffbc024adf918b05",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateServiceCategory"],
    "6076406ad834aa1eb65b8631ebb997f2402ed681a0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateService"],
    "60d44d4ca59fd8e4fff7ce64d77b52460de80802ac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateServiceFeature"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$services$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/services/page/actions.js { ACTIONS_MODULE0 => "[project]/app/lib/actions/service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions/service.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_4bb648f6._.js.map