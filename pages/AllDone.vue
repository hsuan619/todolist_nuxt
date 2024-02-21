<template>
    <main>
        <showdone/>
        <cleandone/>
    </main>
    
</template>

<script>

import cleandone from '@/components/done.vue'
import showdone from '@/components/showDone.vue'


export default {
    name: 'showalldone',
    component: {
        cleandone,
        showdone
    }
}
</script>