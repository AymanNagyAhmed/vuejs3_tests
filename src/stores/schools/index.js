import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "../../services";

export const useSchoolStore = defineStore("schoolStore", () => {
  const schools = ref([]);

  function initSchools(data) {
    schools.value = data;
  }

  function addNewSchool(school) {
    schools.value.push(school);
  }

  function removeSchool(id) {
    const idx = schools.value.findIndex((s) => s.id === id);
    if (idx === -1) return;
    schools.value.splice(idx, 1);
  }

  async function dispatchGetSchools() {
    try {
      const { status, data } = await API.schools.getSchools();
      if (status === 200) {
        initSchools(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        status: error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchCreateSchool(input) {
    try {
      const { status, data } = await API.schools.createSchool(input);
      if (status === 200) {
        addNewSchool(data.content);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        status: error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchDeleteSchool(id) {
    try {
      const { status } = await API.schools.deleteSchool(id);
      if (status === 200) {
        removeSchool(id);
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        status: error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  async function dispatchUpdateSchool(input) {
    try {
      const { status } = await API.schools.updateSchool(input);
      if (status === 200) {
        return {
          success: true,
          content: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        status: error.response?.status,
        content: null,
      };
    }
    return {
      success: false,
      content: null,
      status: 400,
    };
  }

  return {
    schools,
    initSchools,
    removeSchool,
    dispatchGetSchools,
    dispatchCreateSchool,
    dispatchDeleteSchool,
    dispatchUpdateSchool,
  };
});
