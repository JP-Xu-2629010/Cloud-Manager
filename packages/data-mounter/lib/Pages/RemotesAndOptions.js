"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage_class = exports.kms = exports.encription = exports.acl = exports.environmentVar = exports.location = exports.s3_regions = exports.regions = exports.options = exports.remotes = void 0;
exports.remotes = [
    { name: 'test', type: 's3' },
    { name: 'test2', type: 's3' },
    { name: 'test4', type: 's3' }
];
exports.options = ['New remote', 'Edit existing remote', 'Delete remote', 'Rename remote', 'Copy remote', 'Set configuration password'];
exports.regions = ['Choose a Region', 'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1', 'eu-central-2', 'eu-north-1', 'eu - south - 1', 'eu - south - 2'];
exports.s3_regions = ['eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1', 'eu-central-2', 'eu-north-1', 'eu - south - 1', 'eu - south - 2'];
exports.location = ['Choose a location constraint', 'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1', 'eu-central-2', 'eu-north-1', 'eu - south - 1', 'eu - south - 2'];
exports.environmentVar = ['Choose auth', 'True', 'False'];
exports.acl = ['Choose ACL', 'Private', 'Public-read', 'Public-read-write', 'Authenticated-read', 'Bucket-owner-read', 'Bucket-owner-full-control'];
exports.encription = ['Choose encription', 'None', 'AES256', 'aws:kms'];
exports.kms = ['Choose kms', 'None', 'arn:aws:kms:us-east-1:*'];
exports.storage_class = ['Choose KMS ID Arn', 'Default', 'STANDARD', 'STANDARD_IA', 'ONEZONE_IA', 'GLACIER', 'DEEP_ARCHIVE', 'INTELLIGENT_TIERING'];
