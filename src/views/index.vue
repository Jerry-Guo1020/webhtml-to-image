<template>
    <div class="container">
        <div ref="canvas" class="canvas">
            <h1 class="main-title">To-Do List</h1>
            <div class="column-container">
                <div class="column-card">
                    <div class="column-header">To Do</div>
                    <div class="task-list">
                        <div class="task-item"><span class="task-num">1.</span>吃饭</div>
                        <div class="task-item"><span class="task-num">2.</span>睡觉</div>
                        <div class="task-item"><span class="task-num">3.</span>刷抖音</div>
                    </div>
                </div>

                <div class="column-card">
                    <div class="column-header">Done</div>
                    <div class="task-list">
                        <div class="task-item-done"><span class="task-num">1.</span>洗澡</div>
                        <div class="task-item-done"><span class="task-num">2.</span>学习</div>
                        <div class="task-item-done"><span class="task-num">3.</span>跑步</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import html2canvas from 'html2canvas'
import { ref } from 'vue';


</script>

<style scoped>
.container {
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
}

.canvas {
    width: 800px;
    background-color: #E6E3D8;
    padding: 40px 50px;
    box-sizing: border-box;
    color: #333;
    border-radius: 4px;
}

.main-title {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 30px;
    color: #222;
}

.column-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;

}

.column-card {
    flex: 1;
    border: 1px solid #888;
    border-radius: 12px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    min-height: 400px;
}

.column-header {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    padding: 15px 15px 5px 15px;
    margin-bottom: 5px;
}

.task-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.task-item {
    padding: 12px 15px;
    border-top: 1px solid #999;
    font-size: 15px;
    line-height: 1.4;
    color: #444;
    display: flex;
}

.task-item-done {
    text-decoration: line-through;
    padding: 12px 15px;
    border-top: 1px solid #999;
    font-size: 15px;
    line-height: 1.4;
    color: #444;
    display: flex;
}

.task-num {
    margin-right: 8px;
    font-weight: 500;
}
</style>