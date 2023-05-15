// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import axios from 'axios';
export type Courses = {
  id: number;
  name: string;
  costs: number[];
  time_hours: string;
  time_days: string;
  duration: string;
  description: string[];
  modules: string[][];
  img: string;
};
type GetCoursesResponse = {
  rows(rows: any): unknown;
  data: Courses[];
};
export async function getCourses() {
  if (stryMutAct_9fa48("676")) {
    {}
  } else {
    stryCov_9fa48("676");
    try {
      if (stryMutAct_9fa48("677")) {
        {}
      } else {
        stryCov_9fa48("677");
        // 👇️ const data: GetUsersResponse
        const {
          data,
          status
        } = await axios.get<GetCoursesResponse>(stryMutAct_9fa48("678") ? "" : (stryCov_9fa48("678"), 'http://localhost:5002/api/courses'), stryMutAct_9fa48("679") ? {} : (stryCov_9fa48("679"), {
          headers: stryMutAct_9fa48("680") ? {} : (stryCov_9fa48("680"), {
            Accept: stryMutAct_9fa48("681") ? "" : (stryCov_9fa48("681"), 'application/json')
          })
        }));
        return data;
      }
    } catch (error) {
      if (stryMutAct_9fa48("682")) {
        {}
      } else {
        stryCov_9fa48("682");
        if (stryMutAct_9fa48("684") ? false : stryMutAct_9fa48("683") ? true : (stryCov_9fa48("683", "684"), axios.isAxiosError(error))) {
          if (stryMutAct_9fa48("685")) {
            {}
          } else {
            stryCov_9fa48("685");
            console.log(stryMutAct_9fa48("686") ? "" : (stryCov_9fa48("686"), 'error message: '), error.message);
            return error.message;
          }
        } else {
          if (stryMutAct_9fa48("687")) {
            {}
          } else {
            stryCov_9fa48("687");
            console.log(stryMutAct_9fa48("688") ? "" : (stryCov_9fa48("688"), 'unexpected error: '), error);
            return stryMutAct_9fa48("689") ? "" : (stryCov_9fa48("689"), 'An unexpected error occurred');
          }
        }
      }
    }
  }
}
export async function register(email: string, name: string, password: string) {
  if (stryMutAct_9fa48("690")) {
    {}
  } else {
    stryCov_9fa48("690");
    try {
      if (stryMutAct_9fa48("691")) {
        {}
      } else {
        stryCov_9fa48("691");
        // 👇️ const data: GetUsersResponse
        const {
          data,
          status
        } = await axios.post(stryMutAct_9fa48("692") ? "" : (stryCov_9fa48("692"), 'http://localhost:5002/api/user/registration'), stryMutAct_9fa48("693") ? {} : (stryCov_9fa48("693"), {
          email,
          name,
          password
        }));
        return data;
      }
    } catch (error) {
      if (stryMutAct_9fa48("694")) {
        {}
      } else {
        stryCov_9fa48("694");
        if (stryMutAct_9fa48("696") ? false : stryMutAct_9fa48("695") ? true : (stryCov_9fa48("695", "696"), axios.isAxiosError(error))) {
          if (stryMutAct_9fa48("697")) {
            {}
          } else {
            stryCov_9fa48("697");
            console.log(stryMutAct_9fa48("698") ? "" : (stryCov_9fa48("698"), 'error message: '), error.message);
            return error.message;
          }
        } else {
          if (stryMutAct_9fa48("699")) {
            {}
          } else {
            stryCov_9fa48("699");
            console.log(stryMutAct_9fa48("700") ? "" : (stryCov_9fa48("700"), 'unexpected error: '), error);
            return stryMutAct_9fa48("701") ? "" : (stryCov_9fa48("701"), 'An unexpected error occurred');
          }
        }
      }
    }
  }
}
export async function logIn(email: string, password: string) {
  if (stryMutAct_9fa48("702")) {
    {}
  } else {
    stryCov_9fa48("702");
    try {
      if (stryMutAct_9fa48("703")) {
        {}
      } else {
        stryCov_9fa48("703");
        // 👇️ const data: GetUsersResponse
        const {
          data,
          status
        } = await axios.post(stryMutAct_9fa48("704") ? "" : (stryCov_9fa48("704"), 'http://localhost:5002/api/user/login'), stryMutAct_9fa48("705") ? {} : (stryCov_9fa48("705"), {
          email,
          password
        }));
        return data;
      }
    } catch (error) {
      if (stryMutAct_9fa48("706")) {
        {}
      } else {
        stryCov_9fa48("706");
        if (stryMutAct_9fa48("708") ? false : stryMutAct_9fa48("707") ? true : (stryCov_9fa48("707", "708"), axios.isAxiosError(error))) {
          if (stryMutAct_9fa48("709")) {
            {}
          } else {
            stryCov_9fa48("709");
            console.log(stryMutAct_9fa48("710") ? "" : (stryCov_9fa48("710"), 'error message: '), error.message);
            return error.message;
          }
        } else {
          if (stryMutAct_9fa48("711")) {
            {}
          } else {
            stryCov_9fa48("711");
            console.log(stryMutAct_9fa48("712") ? "" : (stryCov_9fa48("712"), 'unexpected error: '), error);
            return stryMutAct_9fa48("713") ? "" : (stryCov_9fa48("713"), 'An unexpected error occurred');
          }
        }
      }
    }
  }
}