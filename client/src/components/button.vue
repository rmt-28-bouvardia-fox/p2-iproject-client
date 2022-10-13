<script>
export default {
    props: ['name', 'type', 'variant']
}
</script>

<template>
    <button :type="type" :class="variant">
        <span class="icon material-symbols-outlined">{{ name }}</span>
    </button>
</template>