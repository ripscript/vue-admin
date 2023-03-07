<template>
    <div class="flex items-center mt-8 mb-3">
        <hr class="w-10 border-t border-gray-300">
            <div class="mx-2 text-gray-400 text-sm uppercase tracking-normal">{{ title }}</div>
        <hr class="w-full border-t border-gray-300">
    </div>
</template>

<script>
    export default {
        name: 'DividerWithTitle',
        props: {
            title: {
            type: String,
            required: true,
            },
        },
    };
</script>