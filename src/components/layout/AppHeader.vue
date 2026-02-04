<template>
  <header header class="header panel">
    <div class="brand">
      <h1>Zyn Assistant</h1>
    </div>
    <div class="tag">AI Portfolio Project</div>
  </header>
</template>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 14px 20px;
    margin-bottom: 12px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo {
    font-size: 20px;
  }

  h1 {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  .tag {
    font-size: 13px;
    color: #6b7280;
  }
</style>
