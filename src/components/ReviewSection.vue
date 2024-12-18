<template>
  <div class="tabs-container">
    <div class="tabs">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" 
        :class="{'active-tab': activeTab === index}"
        @click="activeTab = index"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="tab-content">
      <p v-if="activeTab === 0">{{ description }}</p>
      <p v-if="activeTab === 1">{{ additionalInfo }}</p>
      <p v-if="activeTab === 2">{{ reviews }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: "Description" },
        { name: "Additional info" },
        { name: "Reviews (3)" }
      ],
      description: `Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. `,
      additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  }
};
</script>

<style scoped>
.tabs-container {
  margin-top: 100px;
  width: 1500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.tabs {
  display: flex;
  margin-bottom: 10px;
}

.tabs button {
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #888;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tabs button.active-tab {
  color: #27ae60;
  border-bottom: 2px solid #27ae60;
}

.tab-content {
  color: #555;
  font-size: 14px;
  line-height: 1.6;
}
</style>
