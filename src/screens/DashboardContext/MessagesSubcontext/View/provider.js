import Helper from '../../../../api/helper';

const getCurrentUser = async () => {
  const result = await Helper.getCurrentUserDetails();
  return result;
};

const getConversationMessages = async () => {
  const response = await Helper.callMoodleWebService(
    'core_message_get_conversation',
    {
      userid: 246,
      conversationid: 66,
      includecontactrequests: 0,
      includeprivacyinfo: 0,
    },
  );
  return response;
};

export default {getCurrentUser, getConversationMessages};
