<template>
    <div class="pill">
        <span class="name">{{ name }}</span>
        <span class="amount">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    props: ['name', 'amount'],
};
</script>

<style scoped>
.pill {
    border-radius: 30px;
    background-color: #dc143c;
    color: #fff;
    margin: 10px;
    height: 30px;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.pill .name {
    margin-left: 15px;
}
.pill .amount {
    margin: 10px;
    padding: 5px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: white;
    color: #dc143c;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
